import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import './profile.css'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'

const Profile = (props) => {

    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        console.log(localStorage.getItem('id'))
        axios.get(`/getuserreservations/${localStorage.getItem('id')}`).then(res => {
            setReservations(res.data.reservations)
            console.log(res)
        })
    }, []);

    console.log(new Date().getMonth())

    console.log(reservations)
    return (
        <div className="profileWrapper">
            <div className="userInfoWrapper">
                
                <h3>User info</h3>
                <p>Name: {localStorage.getItem('user')} <span className="profileEmail"> Email: {localStorage.getItem('email')} </span> </p>
                {/* <p></p> */}
            </div>
            <div className="reservationWrapper"><h3>{reservations.length === 0 ? 'You have no reservations' : 'Reservations'}</h3>
                {reservations.map(el => {
                return <Reservation setReservations={setReservations} title={el.title} date={el.date} hour={el.hour} seats={el.seats} id={el._id} key={el._id} />
                // console.log(el)
                })}
            </div>

        </div>
    )
}

const Reservation = (props) => {

    const cancelReserv = (id) => {
        axios.delete(`/removereservation/${id}`).then(res => {
            props.setReservations(res.data.reservations)
        })
    }

    return (
        <div className="reservation">
            
            <h4>{props.title}</h4>
            <p>Date: {props.date}.{(new Date().getMonth())+1}, {props.hour}</p>
            <p>Seats: {props.seats.join(', ')}</p>
            <button onClick={(e) => cancelReserv(props.id)}>Cancel reservation</button>
        </div>
    )
}

export default withAuthRedirect(Profile)