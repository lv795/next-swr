import { faker } from "@faker-js/faker";

export function createRandomUser(id) {
  return {
    userId: id + 1,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

// 生成随机的模拟数据
export const generateMockData = (count = 20) => {
  let mockData = [];
  for (let i = 0; i < count; i++) {
    mockData.push(createRandomUser(i));
  }

  return mockData;
};
