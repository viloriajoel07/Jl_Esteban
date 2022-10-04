import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { motion, AnimatePresence, AnimationLifecycles } from "framer-motion";

type ModalProps = PropsWithChildren<{
  open: boolean;
  blur?: boolean;
  className?: string;
  containerClassName?: string;
  onAnimationComplete?: AnimationLifecycles["onAnimationComplete"];
  ref?: any;
}>;

const Modal: FC<ModalProps> = ({
  open,
  children,
  blur = true,
  className,
  containerClassName,
  onAnimationComplete,
  ref,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={clsx(
            "fixed flex inset-0 items-center justify-center z-50 bg-black bg-opacity-60",
            blur && "backdrop-blur-md backdrop-filter",
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={clsx(
              "relative flex items-center justify-center",
              containerClassName
            )}
            initial={{ y: "-10%" }}
            animate={{ y: 0 }}
            exit={{ y: "-10%", transition: { ease: "easeInOut" } }}
            onAnimationComplete={onAnimationComplete}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
