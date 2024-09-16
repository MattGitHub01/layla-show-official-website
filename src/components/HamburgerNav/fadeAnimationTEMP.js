
/* .hb-open-anim {
    animation: openHb .7s ease;
}

.hb-close-anim {
    animation: closeHb .7s ease;
} */

    @keyframes openHb {
        from{
            top:-300px;
        }
    
        to{
            top:0;
        }
        
    }
    
    @keyframes closeHb {
        from{
            top:0;
        }
    
        to{
            top:-300px;
        }
        
    }