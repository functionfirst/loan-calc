<template>
  <h1>Loan Details</h1>

  <RouterLink to="/">
    &larr; Back to Loan Calculations
  </RouterLink>

  <div>
    <div>
      £10,000,000.00
      Loan Amount
    </div>

    <div>
      3%
      Margin
    </div>

    <div>
      0.5%
      Base Interest Rate
    </div>

    <div>
      12th Dec 2021
      Start Date
    </div>

    <div>
      12th Dec 2022
      End Date
    </div>

    <button>
      [icon]
      Edit Loan Details
    </button>
  </div>

  <h2>
    Breakdown of loan over its lifetime
  </h2>

  <table>
    <thead>
      <tr>
        <th>Elapsed Days</th>
        <th>Interest</th>
        <th>Daily Interest <span>without margin</span></th>
        <th>Daily Interest <span>with margin</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>13</td>
        <td>£10.00</td>
        <td>£410.00</td>
        <td>£450.00</td>
      </tr>
    </tbody>
  </table>

  <h3>Total Interest</h3>

  <p>£300.00</p>
</template>
