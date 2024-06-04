import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import sha256 from 'js-sha256';
import OrderAPI from '../API/OrderAPI';

MoMo.propTypes = {
    orderID: PropTypes.string,
    total: PropTypes.number,
}

MoMo.defaultProps = {
    orderID: '',
    total: 0,
}

const MoMoPaymentV2 = async (amount) => {
    const res = await OrderAPI.get_momo_payment(amount)
    console.log(res);
}

function MoMo(props) {
    const [error, setError] = useState(false)

    const { orderID, total } = props

    useEffect(() => {
        
    }, [orderID, total])

    return (
        <div>
            {
                error &&
                <div className="modal_success">
                    <div className="group_model_success pt-3">
                        <div className="text-center p-2">
                            <i className="fa fa-bell fix_icon_bell" style={{ fontSize: '40px', color: '#fff', backgroundColor: '#f84545' }}></i>
                        </div>
                        <h4 className="text-center p-3" style={{ color: '#fff' }}>Lỗi thanh toán!!!</h4>
                    </div>
                </div>
            }
        </div>
    );
}

export default MoMo;
