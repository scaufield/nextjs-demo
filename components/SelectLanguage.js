import { GlobalOutlined } from "@ant-design/icons";
import { Select } from "antd";

import { selectRussian, selectEnglish } from "../redux/mainSlice";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

export default function SelectLanguage(props) {
    const language = useSelector((state) => state.main.language);

    const dispatch = useDispatch();

    function handleChange(value) {
        value === "russian"
            ? dispatch(selectRussian())
            : dispatch(selectEnglish());
    }

    return (
        <div
            style={{
                alignItems: "center",
                margin: "0 10px",
                gap: "0px",
                display: "flex",
            }}
        >
            <GlobalOutlined
                className="site-form-item-icon"
                style={{
                    color: props.color,
                    cursor: "pointer",
                    margin: 0,

                }}
            />
            <Select
                style={{ color: props.color, width: 60, margin: 0, padding: 0 }}
                defaultValue={language}
                bordered={false}
                onChange={handleChange}
            >
                <Option value="russian">RU</Option>
                <Option value="english">EN</Option>
            </Select>
        </div>
    );
}
