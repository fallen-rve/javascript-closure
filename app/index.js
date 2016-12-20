require('./bootstrap');
import manageTickets from './modules/manageTickets';
(function IIFE() {
    'use strict';

    manageTickets.addTicket("thing");
    manageTickets.addTicket("stuff");

    console.log(`Ticket Count: ${manageTickets.ticketCount()}`);
    get.byId("app").innerHTML =
        "<ul>" +
            manageTickets.getAllTickets().map(function list(c, i) {
                return `<li key=${i}>${c}</li>`;
            }).join("") +
        "</ul>";

    console.log(`Primary Ticket: ${manageTickets.primaryTicket}`);

    console.log("All Tickets:");
    console.log(manageTickets.getAllTickets());

    manageTickets.clearTickets();
    console.log("Cleared Tickets:");
    console.log(manageTickets.getAllTickets());

    console.log(get.bySelector(".classes"));
}());
