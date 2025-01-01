#!/usr/bin/node

/**
 *
 * hdjasda
 * sfbbsfsd
 */

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
