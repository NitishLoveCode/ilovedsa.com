
export const staticQuestion = {
    "id": 2,
    "step": 1,
    "title": "Binary Search",
    "description": "Given a sorted array of integers and a target value, return the index of the target if it exists, otherwise return -1. You must write an algorithm with O(log n) runtime complexity.",
    "difficulty": "easy",
    "tags": ["binary search", "array"],
    "created_at": "2025-05-02T10:00:00Z",
    "answers": [
      {
        "id": 201,
        "language": "JavaScript",
        "code_snippet": "function binarySearch(nums, target) {\n  let left = 0, right = nums.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (nums[mid] === target) return mid;\n    else if (nums[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
        "explanation": "Standard binary search approach using two pointers to maintain search boundaries.",
        "created_at": "2025-05-02T10:10:00Z"
      },
      {
        "id": 202,
        "language": "Python",
        "code_snippet": "def binary_search(nums, target):\n  left, right = 0, len(nums) - 1\n  while left <= right:\n    mid = (left + right) // 2\n    if nums[mid] == target:\n      return mid\n    elif nums[mid] < target:\n      left = mid + 1\n    else:\n      right = mid - 1\n  return -1",
        "explanation": "Binary search algorithm that returns the index of the target or -1 if not found.",
        "created_at": "2025-05-02T10:15:00Z"
      }
    ]
  }

export const testCase = [
    {
      "id": 2001,
      "question_id": 2,
      "input": {
        "nums": [-1, 0, 3, 5, 9, 12],
        "target": 9
      },
      "expected_output": 4,
      "is_sample": true
    },
    {
      "id": 2002,
      "question_id": 2,
      "input": {
        "nums": [-1, 0, 3, 5, 9, 12],
        "target": 2
      },
      "expected_output": -1,
      "is_sample": false
    },
    {
      "id": 2003,
      "question_id": 2,
      "input": {
        "nums": [1, 3, 5, 7, 9, 11],
        "target": 11
      },
      "expected_output": 5,
      "is_sample": false
    },
    {
      "id": 2004,
      "question_id": 2,
      "input": {
        "nums": [1, 2, 3, 4, 5],
        "target": 1
      },
      "expected_output": 0,
      "is_sample": false
    },
    {
      "id": 2005,
      "question_id": 2,
      "input": {
        "nums": [1, 2, 3, 4, 5],
        "target": 6
      },
      "expected_output": -1,
      "is_sample": false
    }
  ]
  
  