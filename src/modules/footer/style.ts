import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    Footer: {
        height: 80,
        borderTop: "1px #48494a solid",
        "& img": {
            width: 20,
            heightt: 20
        },
        "& ul": {
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            margin: "24px 40%",
            marginBottom: 40,
        },

    }
}))
export default useStyles
