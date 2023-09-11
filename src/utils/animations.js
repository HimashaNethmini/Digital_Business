export const containerVariants = ( delay = 0)=> ({
    "offscreen" : {
        opacity: 0,
        y: 30
    },

    "onscreen" : {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
            delay
        }
    }

})