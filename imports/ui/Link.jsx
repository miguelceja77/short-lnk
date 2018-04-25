import React from 'react';

import LinksList from './LinkList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default () => {
    return (
        <div>
            <PrivateHeader title="Tus Links"/>
            <div className="page-content">
                <LinksListFilters/>
                <AddLink/>
                <LinksList/>
            </div>
        </div>
    )
}
