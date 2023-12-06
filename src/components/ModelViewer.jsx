import React from 'react' // eslint-disable-line no-unused-vars
import loadable from '@loadable/component'

const ModelviewerEmbed = loadable(
  async () => (await import('./ModelviewerEmbed')).ModelviewerEmbed,
  {
    fallback: <>loading</>,
  },
)

const Modelviewer = ({ url }) => {
  //   return <>hi</>;
  return <ModelviewerEmbed url={url} />
}

export { Modelviewer }
