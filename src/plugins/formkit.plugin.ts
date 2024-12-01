import { defaultConfig, plugin } from '@formkit/vue'
import { createAutoHeightTextareaPlugin } from '@formkit/addons'

export const formkit = {
  plugin,
  config: defaultConfig({
    plugins: [createAutoHeightTextareaPlugin()]
  })
}
