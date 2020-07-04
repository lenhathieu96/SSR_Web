import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    loginModalPaper:{
        borderRadius:20
    },
    loginModalTitleRoot:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'column',
        padding:0
    },
    btnLogin:{
        borderRadius:10,
        marginBottom:5
    }
})

export default useStyles;