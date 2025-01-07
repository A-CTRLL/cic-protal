import { Card, CardContent, CardTitle } from '@/components/ui/card'
import AppLogo from '@/components/app-logo'


export default function AuthCard({ children }: { children: React.ReactNode }) {
    return (
        <Card className='w-[400px] shadow-md'>
            <CardTitle>
                <AppLogo />
            </CardTitle>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}