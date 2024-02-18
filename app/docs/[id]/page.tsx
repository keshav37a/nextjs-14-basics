import { Params } from './types';

const DocsId = ({ params }: Readonly<{ params: Params }>) => {
    return <div>DocsId - {params.id}</div>;
};

export default DocsId;
