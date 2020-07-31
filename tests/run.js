import posthtml from 'posthtml';
import inline from '../alpine-inline-babel';

export default async function run(inputHTML, config) {
  const {html} = await posthtml([inline(config)]).process(inputHTML);
  return html;
}
