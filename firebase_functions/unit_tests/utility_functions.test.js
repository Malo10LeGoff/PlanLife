import { GetTasks_Health, CreateTask_Health, DeleteTask_Health } from '../utility_functions';

describe("GetTasks", function () {

    it("Get all the tasks for an user", function () {
        assert.equal(GetTasks_Health("VdTnqH20zWlamr001f82"), ["Yoga"]);
    });

});

describe("CreateTask", function () {

    it("Create a task and check whether or not it's created", function () {
        CreateTask_Health("Mock_Task1",)
        assert.equal(GetTasks_Health("VdTnqH20zWlamr001f82"), ["Yoga", "Mock_Task1"]);
    });

});

describe("Delete Task", function () {

    it("Delete a task (the one that was created) and check if it's deleted", function () {
        assert.equal(GetTasks_Health("VdTnqH20zWlamr001f82"), ["Yoga"]);
    });

});