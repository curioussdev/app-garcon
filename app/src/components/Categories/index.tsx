import { FlatList } from 'react-native';


import { Text } from '../Text';

import { CategoryContainer, Icon } from './styles';
import { useState } from 'react';
import { Category } from '../../types/Category';

interface CategoryProps {
    categories: Category[];
    onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory}: CategoryProps) {
    const [selectedCategory, setSelectedCategory] = useState('');

    function handleSelectedCategory(categoryId: string) {
        const category = selectedCategory === categoryId ? '' : categoryId; // se o user clicar em uma cat, chama o handleSelectedCategory, caso não, permanece no unitial state
        
        onSelectCategory(category);
        setSelectedCategory(category);
    }
    return (
        <>
            <FlatList
                horizontal
                contentContainerStyle={{ paddingRight: 24 }}
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={category => category._id}
                renderItem={({ item: category }) => {

                    const isSelected = selectedCategory === category._id;

                    return (

                        <CategoryContainer onPress={() => handleSelectedCategory(category._id)}>
                            <Icon>
                                <Text  opacity={isSelected ? 1 : 0.5} >
                                    {category.icon}
                                </Text>
                            </Icon>

                            <Text opacity={isSelected ? 1 : 0.5} size={14} weight='600'>
                                {category.name}
                            </Text>
                        </CategoryContainer>
                    );
                }
                }
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