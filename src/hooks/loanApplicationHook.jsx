import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostApplication } from "../Services/LoanServices";

export const usePostLoan = () => {
    const queryClient = useQueryClient();

    return useMutation({    
        mutationFn: PostApplication,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Loan'] })
        },
        onError: (error) => {
            console.log("Error Posting ", error)
        }
    })
}