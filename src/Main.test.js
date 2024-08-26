import { updateTimes } from "./Components/Main";
import { fetchTimes } from "./Components/Main";

jest.mock("./Components/Main", () => {
  const actualModule = jest.requireActual("./Components/Main");
  return {
    ...actualModule,
    fetchTimes: jest.fn(),
  };
});

describe("updates times", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should update based on a newly selected date", () => {
    const mockTimes = [
      "1:00",
      "1:30",
      "2:30",
      "3:00",
      "3:30",
      "5:00",
      "5:30",
      "6:00",
      "6:30",
      "7:30",
      "8:30",
      "9:00",
    ];

    fetchTimes.mockReturnValue(mockTimes);

    const initialState = {
      availableTimes: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00"],
    };
    const dateString = "2024-09-04T00:00:00.000Z";
    const dateObject = new Date(dateString);

    const expectedState = { availableTimes: mockTimes };

    const newState = updateTimes(initialState, dateObject);

    expect(newState).toEqual(expectedState);
  });
});
