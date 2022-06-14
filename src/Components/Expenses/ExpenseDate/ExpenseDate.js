import { useContext } from "react";
import AuthContext from "../../../context/authContext";

const ExpenseDate = ({ createdAt }) => {

    const context = useContext(AuthContext)

    console.log("CONTEXT : ", context)

    const day = createdAt.toLocaleString("en-US", { day: "numeric" })
    const month = createdAt.toLocaleString("en-US", { month: "long" })
    const year = createdAt.getFullYear();
    return (
        <>
        {context.isLoggedIn && <p>Date : {month} {day}, {year}</p> }

        </>
    )
}

export default ExpenseDate;