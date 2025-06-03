import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
// import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
// import { Hashing } from "common/services";
// import { JwtToken } from "common/services/jwtToken";
import { LoginDto } from "./DTO";

describe("AuthService", () => {
  let service: AuthService;
  let mockEmpRepoService: any;
  let mockHashing: any;
  let mockJwtToken: any;
  let mockResponse: any;

  beforeEach(async () => {
    mockEmpRepoService = {
      findOne: jest.fn(),
    };
    mockHashing = {
      verifyHash: jest.fn(),
    };
    mockJwtToken = {
      createToken: jest.fn(),
    };
    mockResponse = {
      cookie: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: "EmployeeRepoService",
          useValue: mockEmpRepoService,
        },
        {
          provide: "Hashing",
          useValue: mockHashing,
        },
        {
          provide: "JwtToken",
          useValue: mockJwtToken,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => jest.clearAllMocks());

  describe("login", () => {
    const mockLogin: LoginDto = {
      email: "example@example.com",
      password: "Password@123",
    };
    const mockEmployee = {
      _id: "507f1f77bcf86cd799439011",
      email: "example@example.com",
      password: "hashedPassword",
      occupation: "developer",
      isEmailConfirmed: true,
    };

    it("should login successfully with valid credentials", async () => {
      const expectedToken = "fake.jwt.token";
      mockEmpRepoService.findOne.mockResolvedValue(mockEmployee);
      mockHashing.verifyHash.mockReturnValue(true);
      mockJwtToken.createToken.mockResolvedValue(expectedToken);

      const result = await service.login(mockLogin, mockResponse);

      expect(mockEmpRepoService.findOne).toHaveBeenCalledWith({
        email: mockLogin.email,
        isEmailConfirmed: true,
        isDeleted: { $exists: false },
      });

      expect(mockHashing.verifyHash).toHaveBeenCalledWith(
        mockLogin.password,
        mockEmployee.password
      );

      expect(mockJwtToken.createToken).toHaveBeenCalledWith({
        _id: mockEmployee._id,
        occupation: mockEmployee.occupation,
      });

      expect(mockResponse.cookie).toHaveBeenCalledWith(
        "auth-token",
        expectedToken,
        {
          maxAge: 30 * 60 * 1000,
          httpOnly: true,
          sameSite: process.env.MODE === "DEV" ? "lax" : "strict",
          secure: process.env.MODE === "DEV" ? false : true,
        }
      );

      expect(result).toEqual({ message: "success" });
    });
  });

  // it("should be defined", () => {
  //   expect(service).toBeDefined();
  // });
});
