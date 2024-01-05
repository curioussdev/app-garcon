import { Text } from '../Text';
import { Container } from './styles';

interface HeaderProps {
    selectedTable: string;
}

export function Header({ selectedTable }: HeaderProps) {
    return (
        <Container>

            {!selectedTable && (
                <>
                    <Text size={16} opacity={0.9}>Bem-vindo(a) ao</Text>
                    <Text size={24} weight='700'>
                        WAITER
                        <Text size={24}>APP</Text>
                    </Text>
                </>
            )}

        </Container>
    );
}