import React from 'react';

// components
import Navbar from './Navbar/Navbar';
import Preview from './Preview/Preview';

import Entry from './Entry/Entry';


// redux
import { useSelector } from 'react-redux';

const AdminPage = () => {
  const {userLogin} = useSelector((state: any) => state.adminSlice);
  return (
    <section>
      {userLogin ?
      <>
        <Navbar />
        <Preview />
        
      </>
      :
      <>
        <Entry />
      </>
      }
    </section>
  )
}

export default React.memo(AdminPage);