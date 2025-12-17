import Api from "../Api/Api";

export const PostApplication = async (loanApplication) => {
    try {
        const response = await Api.post("/LoanApplication/Apply", loanApplication);
        return response.data;
    } catch (error) {
        throw error.response.data || new Error("Error Posting Application")
    }
}
