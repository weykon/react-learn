import React, { createContext } from 'react'



const UserContext = createContext({
    nickname: 'asd', location: 'earth'
})

const withUser = (WrappedComp: any) =>
    (props: any) =>
        <UserContext.Consumer>
            {
                user => <WrappedComp {...props} {...user} />
            }
        </UserContext.Consumer >;

type CanInputListDataStructProps = {
    id: number, name: string, data: string
}
type CompInList = React.ComponentType<CanInputListDataStructProps>


const withVirtualList =
    (
        WrappedComp: CompInList,
        type: typeof VirtualList extends (a: { type: infer R }) => any ? R : never,
    ) =>
        (props: CanInputListDataStructProps) =>
            <VirtualList type={type}>
                <WrappedComp {...props} />
            </VirtualList >;

const WantToListData: CompInList = () => <div></div>

const ViewPlayersList = withVirtualList(WantToListData, 'horizontal');

const VirtualList =
    ({
        type,
        children
    }: {
        type: 'horizontal' | 'vertical',
        children: React.ReactNode
    }) =>
        <div>
            {type}
            {children}
        </div>


const Appp = () =>
    <div>
        <ViewPlayersList id={0} name={''} data={''} />
    </div>