import { StyleSheet, Text, View, Button } from 'react-native'
import React, { Profiler, ProfilerOnRenderCallback, useCallback, useState } from 'react'
import Item from './item'

const List = () => {
    const [count, setCount] = useState(0);
    const item = ['item1', 'item2', 'item3', 'item4', 'item5'];

    // Ghi nhớ hàm handleClick
    const handleClick = useCallback((label: string) => {
        console.log(`Click Item: ${label}`);
    }, []);

    const render: ProfilerOnRenderCallback = (id, phase, actualDuration) => {
        console.log(`Profiler ID: ${id}, Phase: ${phase}, Actual Duration: ${actualDuration}`);
    };

    return (
        <Profiler id="List" onRender={render}>
            <View>
                <Button
                    title="Count + 1 and checklog"
                    onPress={() => {
                        setCount(count + 1);
                    }}
                />
                {item.map((label, index) => {
                    return <Item key={index} label={label}  onClick={() => {handleClick(label)}} />;
                })}
                <Text>Count: {count}</Text>
            </View>
        </Profiler>
    );
};

export default List

const styles = StyleSheet.create({})