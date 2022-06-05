import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Highlight({proto, example}) {
  return (
   <><span /><Tabs groupId="operating-systems">
      <TabItem value=" proto" label=" proto">'''{proto}'''</TabItem>
      <TabItem value="example" label="example"><code>{example}</code></TabItem>
      </Tabs>


      </>
  )
    // <span
    //   style={{
    //     backgroundColor: color,
    //     borderRadius: '2px',
    //     color: '#fff',
    //     padding: '0.2rem',
    //   }}>
    //   {children}
    // </span>
  // );
}