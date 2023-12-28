import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    paginationContainer: {
        margin: "25px auto !important",
        marginTop: "50px !important",
        "& .MuiPagination-ul": {
            "& li": {
                "& .MuiPaginationItem-root": {
                    color: "#FFFFFF"
                },
                "& .Mui-selected": {
                    backgroundColor: "#1D1E1F !important"
                }
            }
        }
    }
}))
export default useStyles
