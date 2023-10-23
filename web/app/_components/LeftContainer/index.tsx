import React, { Fragment } from "react"
import HistoryList from "../HistoryList"
import LeftHeaderAction from "../LeftHeaderAction"
import { leftSideBarExpandStateAtom } from "@/_helpers/atoms/LeftSideBarExpand.atom"
import { useAtomValue } from "jotai"
import { Variants, motion } from "framer-motion"

const leftSideBarVariants: Variants = {
  show: {
    x: 0,
    width: 320,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  hide: {
    x: "-100%",
    width: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
}

const LeftContainer: React.FC = () => {
  const isVisible = useAtomValue(leftSideBarExpandStateAtom)

  return (
    <motion.div
      initial={false}
      animate={isVisible ? "show" : "hide"}
      variants={leftSideBarVariants}
      className="flex flex-col w-80 flex-shrink-0 border-r border-gray-200"
    >
      {isVisible && (
        <Fragment>
          <LeftHeaderAction />
          <HistoryList />
        </Fragment>
      )}
    </motion.div>
  )
}

export default React.memo(LeftContainer)
