
###  NoDB Ticketing System

This is a no database ticket production and valiadation system. It doesn't store a series of valid tickets over a remote database. No indivisual node is connected to the other: the nodes are offline. There is no search and validate. 

It's key characteristic is, it doesn't use a database, but rather relies on other validation methods to verify validity of the tickets.

### Goals
- The system should be non-connected .i.e there is no communication between issuer and verifer. 
- The user shouldn't be able to abuse the system.
    - The ticket should expire in x amount of time.
    - The user can use the ticket only once.
    
