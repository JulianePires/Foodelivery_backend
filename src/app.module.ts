import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AddressesModule } from './addresses/addresses.module';

@Module({
  imports: [RoutesModule, RestaurantsModule, UsersModule, AuthModule, AddressesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
