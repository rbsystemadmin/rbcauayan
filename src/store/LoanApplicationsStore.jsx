import { create } from 'zustand'

const useLoanApplicationStore = create((set) => ({
    loanApplication: {
        fullName: "",
        email: "",
        contactNo: "",
        branch: "",
        product: "",
        subject: "",
        message: ""
    },

    updateLoanFields: (field, value) =>
        set((state) => ({
            loanApplication: {
                ...state.loanApplication,
                [field]: value,
            }
        })),

    resetLoanApplicationForm: () =>
        set(() => ({
            loanApplication: {
                fullName: "",
                email: "",
                contactNo: "",
                branch: "",
                product: "",
                subject: "",
                message: ""
            }
        })),

}));

export default useLoanApplicationStore;