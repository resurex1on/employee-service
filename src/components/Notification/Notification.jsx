import React, {useEffect, useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from '../../store/actions';

export default Notification = () => {
    const [open, setOpen] = useState(false);
    const notification = useSelector((state) => state.notification);
    const [notificationObj, setNotificationObj] = useState({})
    const dispatch = useDispatch();

    useEffect(() => {
        if(notification){
            setNotificationObj(notification);
            setOpen(notificationObj.show)
        }
    }, [notification])

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <div onClick={() => {
                dispatch(showMessage('Success', 'MESSAGE__SUCCESS'))
            }}>Error</div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {notificationObj.text}
                </Alert>
            </Snackbar>
        </div>
    );
}