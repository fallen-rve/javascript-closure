require('./bootstrap');
import manageTickets from './modules/manageTickets';
(function IIFE() {
    'use strict';

    function updateTicketList() {
        get.byId("ticketList").innerHTML =
            "<ul>" +
            manageTickets.getAllTickets().map(function list(c) {
                return `<li>${c}<button class="action" data-action="delete" data-ticket="${c}">Delete</button></li>`;
            }).join("") +
            "</ul>";
    }


    manageTickets.addTicket("thing");
    manageTickets.addTicket("stuff");
    updateTicketList();

    get.byId('addTicket').addEventListener('keypress', function handleKeypress(e){
        if (e.keyCode === 13) {
            [].map.call(get.byClass('action'), function(el){
                if (el.dataset.action === 'add') {
                    el.click();
                }
            });
        }
    });

    window.addEventListener('click', function handleClick(e) {
        if (e.target.className === 'action') {
            switch (e.target.dataset.action) {
                case 'add':
                    let ticketVal = get.byId('addTicket').value;
                    if (ticketVal === "") {
                        return;
                    }
                    manageTickets.addTicket(ticketVal);
                    get.byId('addTicket').value = '';
                    break;
                case 'clear':
                    if (manageTickets.ticketCount() < 1) {
                        return;
                    }
                    manageTickets.clearTickets();
                    break;
                case 'delete':
                    manageTickets.removeTicket(e.target.dataset.ticket);
                    break;
                default:
                    return;
            }
            updateTicketList();
        }
    });

}());
