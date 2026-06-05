const Reanimated = require('./node_modules/react-native-reanimated/lib/module/index.js');
const { useEvent } = require('./node_modules/react-native-reanimated/lib/module/hook/useEvent.js');
const { useHandler } = require('./node_modules/react-native-reanimated/lib/module/hook/useHandler.js');

function useAnimatedGestureHandler(handlers, dependencies) {
  const gestureHandlers = typeof handlers === 'function' ? { onActive: handlers } : handlers || {};
  const activeHandlers = {};

  if (gestureHandlers.onStart) activeHandlers.onStart = gestureHandlers.onStart;
  if (gestureHandlers.onActive) activeHandlers.onActive = gestureHandlers.onActive;
  if (gestureHandlers.onEnd) activeHandlers.onEnd = gestureHandlers.onEnd;
  if (gestureHandlers.onFinish) activeHandlers.onFinish = gestureHandlers.onFinish;

  const { context, doDependenciesDiffer } = useHandler(activeHandlers, dependencies);

  return useEvent(
    (event) => {
      'worklet';

      const isStateChange = event.oldState != null;

      if (isStateChange) {
        if (gestureHandlers.onStart && event.state === 2 && event.oldState !== 2) {
          gestureHandlers.onStart(event, context);
        }

        if (gestureHandlers.onEnd && event.state === 5 && event.oldState === 4) {
          gestureHandlers.onEnd(event, context);
        }

        if (
          gestureHandlers.onFinish &&
          (event.state === 5 || event.state === 3 || event.state === 1)
        ) {
          gestureHandlers.onFinish(event, context);
        }

        return;
      }

      if (gestureHandlers.onActive) {
        gestureHandlers.onActive(event, context);
      }
    },
    ['onGestureHandlerStateChange', 'onGestureHandlerEvent'],
    doDependenciesDiffer
  );
}

module.exports = {
  ...Reanimated,
  isConfigured: () => true,
  useAnimatedGestureHandler,
};
