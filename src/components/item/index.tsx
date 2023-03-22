import React, { ReactNode } from 'react';

export interface IItemProps {
  loading: boolean,
  children: any
}

export default function Item (props: IItemProps) {
  const {loading, children} = props
  if(loading) {
    return(
      <>
        { children?.map((value:any) => (
          <div className={`${value.props.className}`}>
            <div className={`placeholder ${value.props.className}`} >
              <div className="animated-background"></div>
            </div>
          </div>
        ))
        }
      </>
    )
  }

  return (
    <>
      {children}
    </>
  );
}
