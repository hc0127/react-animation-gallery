import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./contentplaceholder";
import './index.scss'

function AccordionItem({ i, expanded, setExpanded }) {
    const isOpen = i === expanded;

    // By using `AnimatePresence` to mount and unmount the contents, we can animate
    // them in and out while also only rendering the contents of open accordions
    return (
        <>
            <motion.header
                className="accordion_header"
                initial={false}
                animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
                onClick={() => setExpanded(isOpen ? false : i)}
            />
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        className="accordion_section"
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <ContentPlaceholder />
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};

export default function Accordion() {
    // This approach is if you only want max one section open at a time. If you want multiple
    // sections to potentially be open simultaneously, they can all be given their own `useState`.
    const [expanded, setExpanded] = useState(0);

    return accordionIds.map((i) => (
        <AccordionItem i={i} expanded={expanded} setExpanded={setExpanded} />
    ));
};

const accordionIds = [0, 1, 2, 3];
