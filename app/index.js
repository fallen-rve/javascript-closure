require('./bootstrap');
import manageTickets from './modules/manageTickets';
(function IIFE() {
    'use strict';

    function updateTicketList() {
        get.byId("app").innerHTML =
            "<ul>" +
                manageTickets.getAllTickets().map(function list(c, i) {
                    return `<li key=${i}>${c}</li>`;
                }).join("") +
            "</ul>";
    }


    manageTickets.addTicket("thing");
    manageTickets.addTicket("stuff");
    updateTicketList();

    [].forEach.call(get.byClass('action'), function(e, i, a) {
        e.addEventListener('click', function handleClick(e) {
            switch (e.target.dataset.action) {
                case 'add':
                    manageTickets.addTicket('another ticket');
                    break;
                case 'clear':
                    console.log('clear');
                    break;
                default:
                    console.log('no case');
                    break;
            }
            updateTicketList();
        });
    });

}());
