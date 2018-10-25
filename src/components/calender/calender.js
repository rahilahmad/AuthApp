import React, { Component } from "react";
import { connect } from 'react-redux';
import { getEvents } from './action';
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import request from 'superagent';
const CALENDAR_ID = 'nu.edu.pk_rjvo0a8hogvtgcpavvol7u1sno@group.calendar.google.com'
const API_KEY = 'AIzaSyBT4tlNuisZ1CO1SEAxkxsy2mBs6WW0bM8'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

const localizer = Calendar.momentLocalizer(moment);

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        this.props.getEvents();
    }

    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
            this.setState({
                events: [
                    ...this.state.events,
                    {
                        start,
                        end,
                        title
                    },
                ],
            })
        console.log(this.state.events)
        this.postEvent
    }
    postEvent = () => {
        const test = {
            start: this.state.events.start,
            end: this.state.events.end,
            title: this.state.events.title
        }
        const test1 = JSON.stringify(test)
        request
            .post(url)
            .send(test1)
            .then((resp) => {
                console.log('sasasa', resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <Calendar
                    popup
                    selectable
                    localizer={localizer}
                    culture='en-GB'
                    style={{ height: '50vh' }}
                    defaultView={Calendar.Views.MONTH}
                    events={this.props.events || []}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={this.handleSelect}
                />
                <a style={{
                    marginLeft: 800,
                }}
                    className="primary-cta"
                    href="https://calendar.google.com/calendar?cid=c3FtMnVkaTFhZGY2ZHM3Z2o5aDgxdHVldDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                    target="_blank"
                >
                    <button>Create an Event</button>
                </a>
            </div>

        )
    }
}

const mapDispatchToProps = {
    getEvents
}

const mapStateToProps = (state) => {
    return {
        events: state.calender.events
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);