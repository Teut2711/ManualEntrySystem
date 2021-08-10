import { Search, Label } from "semantic-ui-react";
import _ from "lodash";
import {
    useCallback,
    useReducer,
    useRef,
    useContext,
    useEffect,
} from "react";
import { TestContext, TabContext } from "../Main"
import getProfileMenu from "./ProfileMenu";

const initialState = {
    loading: false,
    results: [],
    value: "",
};

const exampleReducer = (state, action) => {
    switch (action.type) {
        case "CLEAN_QUERY":
            return initialState;
        case "START_SEARCH":
            return { ...state, loading: true, value: action.query };
        case "FINISH_SEARCH":
            return { ...state, loading: false, results: action.results };
        case "UPDATE_SELECTION":
            return { ...state, value: action.selection };

        default:
            throw new Error();
    }
}

const TestSearch = () => {
    const [state, dispatch] = useReducer(exampleReducer, initialState);
    const { loading, results, value } = state;
    const timeoutRef = useRef();
    const { setCurrentTabIndex } = useContext(TabContext)
    const { testList } = useContext(TestContext)
    const handleSearchChange = useCallback(
        (e, data) => {
            clearTimeout(timeoutRef.current);
            dispatch({ type: "START_SEARCH", query: data.value });

            timeoutRef.current = setTimeout(() => {
                if (data.value.length === 0) {
                    dispatch({ type: "CLEAN_QUERY" });
                    return;
                }

                const re = new RegExp(_.escapeRegExp(data.value), "i");
                const isMatch = (result) => re.test(result.text);

                dispatch({
                    type: "FINISH_SEARCH",
                    results: _.filter(Object.values(testList), isMatch),
                });
            }, 300);
        },
        [testList]
    );

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    const sortedTestList = Object.fromEntries(
        Object
            .values(testList)
            .sort((a, b) => a.counter - b.counter)
            .map((el, index) => [el.text, index]))

    const resultRenderer = ({ text }) => {
        return <Label
            content={text}
            onClick={
                () => {
                    setCurrentTabIndex(sortedTestList[text] + getProfileMenu().length + 1)
                }
            }
        />
    };

    return <Search
        loading={loading}
        onResultSelect={(e, data) => {
            dispatch({
                type: "UPDATE_SELECTION",
                selection: data.result.title,
            })
        }
        }
        onSearchChange={handleSearchChange}
        resultRenderer={resultRenderer}
        results={results}
        value={value}
    />
}
export default TestSearch;