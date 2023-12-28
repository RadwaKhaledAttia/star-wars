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
        '@media(max-width: 770px)': {
            "& ul": {
                margin: "24px 15%",
            },
        },
        '@media(max-width: 425px)': {
            "& ul": {
                margin: "12px 0",
                padding: 0
            },
        },
    }
}))
export default useStyles
