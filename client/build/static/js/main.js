(this["webpackJsonpcinema-app"] = this["webpackJsonpcinema-app"] || []).push([
    [0],
    {
        29: function (e, t, a) {},
        34: function (e, t, a) {
            e.exports = a(69);
        },
        39: function (e, t, a) {},
        62: function (e, t, a) {},
        63: function (e, t, a) {},
        64: function (e, t, a) {},
        66: function (e, t, a) {},
        67: function (e, t, a) {},
        68: function (e, t, a) {},
        69: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = a(30),
                o = a.n(c),
                s = a(2),
                i = a(3),
                l = a(5),
                m = a(4),
                u = a(6),
                h = a(11),
                d = a(12),
                v =
                    (a(39),
                    (function (e) {
                        function t() {
                            var e, a;
                            Object(s.a)(this, t);
                            for (
                                var n = arguments.length,
                                    r = new Array(n),
                                    c = 0;
                                c < n;
                                c++
                            )
                                r[c] = arguments[c];
                            return (
                                ((a = Object(l.a)(
                                    this,
                                    (e = Object(m.a)(t)).call.apply(
                                        e,
                                        [this].concat(r)
                                    )
                                )).state = { posterUrl: "" }),
                                a
                            );
                        }
                        return (
                            Object(u.a)(t, e),
                            Object(i.a)(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return r.a.createElement(
                                            "div",
                                            { className: "movie" },
                                            r.a.createElement(
                                                "div",
                                                { className: "movie-header" },
                                                r.a.createElement(
                                                    "h3",
                                                    {
                                                        className:
                                                            "movie-title",
                                                    },
                                                    this.props.movieInfo.title
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                { className: "about-movie" },
                                                r.a.createElement("img", {
                                                    className: "poster",
                                                    src: this.props.posterUrl,
                                                    alt: "Poster of movie: ".concat(
                                                        this.props.movieInfo
                                                            .title
                                                    ),
                                                }),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "movie-overview",
                                                    },
                                                    r.a.createElement(
                                                        "p",
                                                        {
                                                            className:
                                                                "movie-descritpion",
                                                        },
                                                        this.props.movieInfo
                                                            .overview
                                                    ),
                                                    r.a.createElement(
                                                        "h3",
                                                        null,
                                                        "The avarage note of the film is: ",
                                                        this.props.movieInfo
                                                            .vote_average
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            h.b,
                                                            {
                                                                to: "/first-step?movie=".concat(
                                                                    this.props
                                                                        .movieInfo
                                                                        .original_title
                                                                ),
                                                            },
                                                            r.a.createElement(
                                                                "button",
                                                                {
                                                                    className:
                                                                        "reserve-tickets-btn",
                                                                },
                                                                "Make reservation"
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component)),
                p = a(33),
                f = a.n(p).a.create({
                    baseURL:
                        "https://api.themoviedb.org/3/movie/now_playing?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=en-US&page=1",
                }),
                E =
                    (a(62),
                    (function (e) {
                        function t() {
                            var e, a;
                            Object(s.a)(this, t);
                            for (
                                var n = arguments.length,
                                    r = new Array(n),
                                    c = 0;
                                c < n;
                                c++
                            )
                                r[c] = arguments[c];
                            return (
                                ((a = Object(l.a)(
                                    this,
                                    (e = Object(m.a)(t)).call.apply(
                                        e,
                                        [this].concat(r)
                                    )
                                )).state = { movies: [] }),
                                a
                            );
                        }
                        return (
                            Object(u.a)(t, e),
                            Object(i.a)(t, [
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        var e = this;
                                        f.get()
                                            .then(function (t) {
                                                e.setState({
                                                    movies: t.data.results.slice(
                                                        0,
                                                        12
                                                    ),
                                                });
                                            })
                                            .catch(function (e) {
                                                return console.log(
                                                    "Something went wrong"
                                                );
                                            });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        return r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                { className: "listOfContents" },
                                                o.a.createElement(
                                                    d.b,
                                                    {
                                                        to: "/",
                                                        className: "fromLeft",
                                                    },
                                                    "Movies"
                                                ),
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        className: "fromCenter",
                                                        href: "/coming-soon",
                                                    },
                                                    "Coming soon"
                                                ),
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        className: "fromCenter",
                                                        href: "/prices",
                                                    },
                                                    "Prices"
                                                ),
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        className: "fromRight",
                                                        href: "/contact",
                                                    },
                                                    "Contact"
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                { className: "movies" },
                                                this.state.movies.map(function (
                                                    e
                                                ) {
                                                    return r.a.createElement(
                                                        v,
                                                        {
                                                            movieInfo: e,
                                                            key: e.id,
                                                            posterUrl:
                                                                "https://image.tmdb.org/t/p/w342" +
                                                                e.poster_path,
                                                        }
                                                    );
                                                })
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component)),
                b =
                    (a(63),
                    (function (e) {
                        function t() {
                            return (
                                Object(s.a)(this, t),
                                Object(l.a)(
                                    this,
                                    Object(m.a)(t).apply(this, arguments)
                                )
                            );
                        }
                        return (
                            Object(u.a)(t, e),
                            Object(i.a)(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return r.a.createElement(
                                            "div",
                                            { className: "header-info" },
                                            r.a.createElement("a", {
                                                className: "header-link",
                                                href: "/",
                                            })
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component)),
                g =
                    (a(64),
                    (function (e) {
                        function t() {
                            return (
                                Object(s.a)(this, t),
                                Object(l.a)(
                                    this,
                                    Object(m.a)(t).apply(this, arguments)
                                )
                            );
                        }
                        return (
                            Object(u.a)(t, e),
                            Object(i.a)(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return r.a.createElement(
                                            "div",
                                            { className: "reservation-info" },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "reservation-msg",
                                                },
                                                r.a.createElement(
                                                    "h1",
                                                    null,
                                                    "Thank you for choosing our cinema. Hava a nice time!"
                                                ),
                                                r.a.createElement(
                                                    h.b,
                                                    {
                                                        className: "btn-link",
                                                        to: "/",
                                                    },
                                                    r.a.createElement(
                                                        "button",
                                                        {
                                                            className:
                                                                "back-btn",
                                                            id: "movies",
                                                        },
                                                        "Home page"
                                                    )
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component)),
                y = a(18),
                k = a.n(y),
                N =
                    (a(29),
                    (function (e) {
                        function t() {
                            var e, a;
                            Object(s.a)(this, t);
                            for (
                                var n = arguments.length,
                                    c = new Array(n),
                                    o = 0;
                                o < n;
                                o++
                            )
                                c[o] = arguments[o];
                            return (
                                ((a = Object(l.a)(
                                    this,
                                    (e = Object(m.a)(t)).call.apply(
                                        e,
                                        [this].concat(c)
                                    )
                                )).state = {
                                    title: "",
                                    date: "",
                                    hour: "",
                                    tickets: 0,
                                    seats: [],
                                    createReservationDisabled: !0,
                                }),
                                (a.onDayChange = function (e) {
                                    a.setState({
                                        date: "".concat(e.currentTarget.value),
                                    }),
                                        a.updateButtonState();
                                }),
                                (a.onHourChange = function (e) {
                                    a.setState({
                                        hour: "".concat(e.currentTarget.value),
                                    }),
                                        a.updateButtonState();
                                }),
                                (a.onTicketChange = function (e) {
                                    a.setState({
                                        tickets: Number(
                                            "".concat(e.currentTarget.value)
                                        ),
                                    }),
                                        a.updateButtonState();
                                }),
                                (a.onSeatChange = function (e) {
                                    if (
                                        "seat blocked" !==
                                        e.currentTarget.className
                                    )
                                        return "seat marked" ===
                                            e.currentTarget.className
                                            ? (e.currentTarget.classList.remove(
                                                  "marked"
                                              ),
                                              void a.setState({
                                                  seats: a.state.seats.filter(
                                                      function (t, a, n) {
                                                          return (
                                                              t !==
                                                              e.currentTarget.id
                                                          );
                                                      }
                                                  ),
                                              }))
                                            : void (
                                                  a.state.tickets !==
                                                      a.state.seats.length &&
                                                  ((e.currentTarget.className =
                                                      "seat marked"),
                                                  a.setState({
                                                      seats: a.state.seats.concat(
                                                          e.currentTarget.id
                                                      ),
                                                  }),
                                                  a.updateButtonState())
                                              );
                                }),
                                (a.renderRow = function (e, t) {
                                    var n = [];
                                    n.push(
                                        r.a.createElement(
                                            "div",
                                            { key: e, className: "row-name" },
                                            e
                                        )
                                    );
                                    for (var c = 1; c <= t; c++)
                                        n.push(
                                            r.a.createElement(
                                                "div",
                                                {
                                                    id: ""
                                                        .concat(e, "-")
                                                        .concat(c),
                                                    ref: ""
                                                        .concat(e, "-")
                                                        .concat(c),
                                                    key: ""
                                                        .concat(e, "-")
                                                        .concat(c),
                                                    className: "seat",
                                                    onClick: a.onSeatChange,
                                                },
                                                c
                                            )
                                        );
                                    return n;
                                }),
                                (a.createReservation = function () {
                                    var e, t, n, r, c, o, s, i, l;
                                    return k.a.async(function (m) {
                                        for (;;)
                                            switch ((m.prev = m.next)) {
                                                case 0:
                                                    return (
                                                        (e = a.state),
                                                        (t = e.date),
                                                        (n = e.hour),
                                                        (r = e.tickets),
                                                        (c = e.seats),
                                                        (o =
                                                            window.location
                                                                .href),
                                                        (s = new URL(o)),
                                                        (i = s.searchParams.get(
                                                            "movie"
                                                        )),
                                                        (l = {
                                                            title: i,
                                                            date: t,
                                                            hour: n,
                                                            tickets: r,
                                                            seats: c,
                                                        }),
                                                        console.log(l),
                                                        (m.next = 8),
                                                        k.a.awrap(
                                                            fetch(
                                                                "api/reservations",
                                                                {
                                                                    method:
                                                                        "POST",
                                                                    body: JSON.stringify(
                                                                        l
                                                                    ),
                                                                    headers: {
                                                                        "Content-Type":
                                                                            "application/json",
                                                                    },
                                                                }
                                                            )
                                                                .then(function (
                                                                    e
                                                                ) {
                                                                    200 !==
                                                                        e.status &&
                                                                        e
                                                                            .text()
                                                                            .then(
                                                                                function (
                                                                                    e
                                                                                ) {
                                                                                    return alert(
                                                                                        e
                                                                                    );
                                                                                }
                                                                            );
                                                                })
                                                                .then(
                                                                    function () {
                                                                        a.props.history.push(
                                                                            "/completed-reservation"
                                                                        );
                                                                    }
                                                                )
                                                                .catch(
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return alert(
                                                                            e
                                                                        );
                                                                    }
                                                                )
                                                        )
                                                    );
                                                case 8:
                                                case "end":
                                                    return m.stop();
                                            }
                                    });
                                }),
                                a
                            );
                        }
                        return (
                            Object(u.a)(t, e),
                            Object(i.a)(t, [
                                {
                                    key: "updateButtonState",
                                    value: function () {
                                        var e = this.state,
                                            t = e.date,
                                            a = e.hour,
                                            n = e.tickets;
                                        "" !== t &&
                                            "" !== a &&
                                            n > 0 &&
                                            this.setState({
                                                createReservationDisabled: !1,
                                            });
                                    },
                                },
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        var e = window.location.href,
                                            t = new URL(e).searchParams.get(
                                                "movie"
                                            );
                                        this.setState({ title: t });
                                    },
                                },
                                {
                                    key: "markBlocked",
                                    value: function () {
                                        fetch(
                                            "api/reservations?title="
                                                .concat(
                                                    this.state.title,
                                                    "&hour="
                                                )
                                                .concat(
                                                    this.state.hour,
                                                    "&date="
                                                )
                                                .concat(this.state.date),
                                            {
                                                method: "GET",
                                                headers: {
                                                    "Content-Type":
                                                        "application/json",
                                                },
                                            }
                                        )
                                            .then(function (e) {
                                                200 !== e.status &&
                                                    e.text().then(function (e) {
                                                        return alert(e);
                                                    }),
                                                    e.json().then(function (e) {
                                                        var t = e.map(function (
                                                            e
                                                        ) {
                                                            return e.seats;
                                                        });
                                                        [].concat
                                                            .apply([], t)
                                                            .map(function (e) {
                                                                document
                                                                    .getElementById(
                                                                        e
                                                                    )
                                                                    .classList.add(
                                                                        "blocked"
                                                                    );
                                                            });
                                                    });
                                            })
                                            .catch(function (e) {
                                                return alert(e);
                                            });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = new Date().getDate(),
                                            t = new Date().getMonth() + 1,
                                            a = "".concat(e + 1),
                                            n = "".concat(e + 2);
                                        console.log(this.state);
                                        var c = this.state,
                                            o = c.date,
                                            s = c.hour;
                                        return (
                                            "" !== o &&
                                                "" !== s &&
                                                this.markBlocked(),
                                            r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "h1",
                                                    { className: "showtimes" },
                                                    "Showtimes"
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "reservation",
                                                    },
                                                    r.a.createElement(
                                                        "form",
                                                        {
                                                            className:
                                                                "reservation-form",
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "seans-days",
                                                            },
                                                            r.a.createElement(
                                                                "h1",
                                                                null,
                                                                "Day"
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "radio",
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        htmlFor: e,
                                                                    },
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            type:
                                                                                "radio",
                                                                            value: e,
                                                                            id: e,
                                                                            name:
                                                                                "radio-for-day",
                                                                            onClick: this
                                                                                .onDayChange,
                                                                        }
                                                                    ),
                                                                    e,
                                                                    ".",
                                                                    t
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "radio",
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        htmlFor: a,
                                                                    },
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            type:
                                                                                "radio",
                                                                            value: a,
                                                                            id: a,
                                                                            name:
                                                                                "radio-for-day",
                                                                            onClick: this
                                                                                .onDayChange,
                                                                        }
                                                                    ),
                                                                    a,
                                                                    ".",
                                                                    t
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "radio",
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        htmlFor: n,
                                                                    },
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            type:
                                                                                "radio",
                                                                            value: n,
                                                                            id: n,
                                                                            name:
                                                                                "radio-for-day",
                                                                            onClick: this
                                                                                .onDayChange,
                                                                        }
                                                                    ),
                                                                    n,
                                                                    ".",
                                                                    t
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "seans-hour",
                                                            },
                                                            r.a.createElement(
                                                                "h1",
                                                                null,
                                                                "Seans hour"
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "radio",
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        htmlFor:
                                                                            "nine-am",
                                                                    },
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            type:
                                                                                "radio",
                                                                            value:
                                                                                "9:00",
                                                                            id:
                                                                                "nine-am",
                                                                            name:
                                                                                "radio-for-hour",
                                                                            onClick: this
                                                                                .onHourChange,
                                                                        }
                                                                    ),
                                                                    "9:00"
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "radio",
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        htmlFor:
                                                                            "half-past-twelve",
                                                                    },
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            type:
                                                                                "radio",
                                                                            value:
                                                                                "12:30",
                                                                            id:
                                                                                "half-past-twelve",
                                                                            name:
                                                                                "radio-for-hour",
                                                                            onClick: this
                                                                                .onHourChange,
                                                                        }
                                                                    ),
                                                                    "12:30"
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "radio",
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        htmlFor:
                                                                            "half-past-four",
                                                                    },
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            type:
                                                                                "radio",
                                                                            value:
                                                                                "16:30",
                                                                            id:
                                                                                "half-past-four",
                                                                            name:
                                                                                "radio-for-hour",
                                                                            onClick: this
                                                                                .onHourChange,
                                                                        }
                                                                    ),
                                                                    "16:30"
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "radio",
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        htmlFor:
                                                                            "ten-past-twenty",
                                                                    },
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            type:
                                                                                "radio",
                                                                            value:
                                                                                "20:10",
                                                                            id:
                                                                                "ten-past-twenty",
                                                                            name:
                                                                                "radio-for-hour",
                                                                            onClick: this
                                                                                .onHourChange,
                                                                        }
                                                                    ),
                                                                    "20:10"
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "tickets",
                                                            },
                                                            r.a.createElement(
                                                                "h1",
                                                                null,
                                                                "Tickets"
                                                            ),
                                                            r.a.createElement(
                                                                "p",
                                                                null,
                                                                "You can buy max 6 tickets per seans."
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "ticket-type",
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        htmlFor:
                                                                            "tickets",
                                                                    },
                                                                    "Ticket cost - 8 €. Ticket number:",
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            className:
                                                                                "tickets-number",
                                                                            type:
                                                                                "number",
                                                                            name:
                                                                                "ticket",
                                                                            min:
                                                                                "0",
                                                                            max:
                                                                                "6",
                                                                            onChange: this
                                                                                .onTicketChange,
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        { className: "hall" },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "seats",
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "screen",
                                                                },
                                                                "Screen"
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "A",
                                                                    6
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "B",
                                                                    6
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "C",
                                                                    12
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "D",
                                                                    12
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "E",
                                                                    14
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "F",
                                                                    14
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "G",
                                                                    14
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "H",
                                                                    20
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "I",
                                                                    20
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row",
                                                                },
                                                                this.renderRow(
                                                                    "J",
                                                                    20
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        h.b,
                                                        { to: "/" },
                                                        r.a.createElement(
                                                            "button",
                                                            {
                                                                className:
                                                                    "back-btn",
                                                                id: "movies",
                                                            },
                                                            "Back"
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "button",
                                                        {
                                                            className:
                                                                "reservation-btn",
                                                            id:
                                                                "seats-reservation",
                                                            onClick: this
                                                                .createReservation,
                                                            disabled: this.state
                                                                .createReservationDisabled,
                                                        },
                                                        "Reserve Seats"
                                                    )
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component)),
                w =
                    (a(66),
                    (function (e) {
                        function t() {
                            return (
                                Object(s.a)(this, t),
                                Object(l.a)(
                                    this,
                                    Object(m.a)(t).apply(this, arguments)
                                )
                            );
                        }
                        return (
                            Object(u.a)(t, e),
                            Object(i.a)(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "p",
                                                { className: "footer-msg" },
                                                "Thank you for watching films in our cinema. See you next time!"
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component)),
                j =
                    (a(67),
                    (function (e) {
                        function t() {
                            return (
                                Object(s.a)(this, t),
                                Object(l.a)(
                                    this,
                                    Object(m.a)(t).apply(this, arguments)
                                )
                            );
                        }
                        return (
                            Object(u.a)(t, e),
                            Object(i.a)(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement("img", {
                                                className: "image",
                                                src:
                                                    "https://upload.wikimedia.org/wikipedia/commons/0/02/35mm_movie_negative.jpg",
                                                alt: "The cinema",
                                            })
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component)),
                O = (function (e) {
                    function t() {
                        return (
                            Object(s.a)(this, t),
                            Object(l.a)(
                                this,
                                Object(m.a)(t).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(u.a)(t, e),
                        Object(i.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(b, null),
                                        r.a.createElement(j, null),
                                        r.a.createElement(
                                            h.a,
                                            null,
                                            r.a.createElement(d.a, {
                                                exact: !0,
                                                path: "/",
                                                component: E,
                                            }),
                                            r.a.createElement(d.a, {
                                                path: "/first-step",
                                                component: N,
                                            }),
                                            r.a.createElement(d.a, {
                                                path: "/completed-reservation",
                                                component: g,
                                            })
                                        ),
                                        r.a.createElement(w, null)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(n.Component);
            a(68);
            o.a.render(
                r.a.createElement(O, null),
                document.querySelector("#root")
            );
        },
    },
    [[34, 1, 2]],
]);
