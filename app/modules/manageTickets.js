var manageTickets = (function manageTickets(){
    "use strict";
    let tickets = [];
    var publicAPI = {
        addTicket: addTicket,
        removeTicket: removeTicket,
        getAllTickets: getAllTickets,
        clearTickets: clearTickets,
        ticketCount: ticketCount,
        primaryTicket: ""
    };

    function addTicket(ticket) {
        if (tickets.length === 0) {
            publicAPI.primaryTicket = ticket;
        }
        tickets.push(ticket);
    }

    function removeTicket(ticket) {
        let index = tickets.indexOf(ticket);
        if (index > -1) {
            tickets.splice(index, 1);
        }
    }

    function getAllTickets() {
        return tickets;
    }

    function clearTickets() {
        tickets.splice(0, tickets.length);
    }

    function ticketCount() {
        return tickets.length;
    }

    return publicAPI;
})();

module.exports = manageTickets;
