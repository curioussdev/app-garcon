import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';


export function Categories() {
    return (
        <>
            <FlatList
                horizontal
                contentContainerStyle={{ paddingRight: 24}}
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={category => category._id}
                renderItem={( { item: category  } ) => (
                    <Category>
                        <Icon>
                            <Text>{category.icon}</Text>
                        </Icon>

                        <Text size={14} weight='600'>{category.name}</Text>
                    </Category>
                )}
            />



            {/* categories.map((category) => (
            <Category key={category._id}>
                <Icon>
                    <Text>{category.icon}</Text>
                </Icon>

                <Text size={14} weight='600'>{category.name}</Text>
            </Category>
        ))
        */}
        </>
    );
}