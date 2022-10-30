import React from "react";
import { motion } from "framer-motion";

const Animation = () => {
    return (
        <motion.div
            whileHover={{scale:1.2, rotate: 90}}
            />
    )
}