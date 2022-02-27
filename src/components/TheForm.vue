<template>
  <section class="form">
    <form action="#">
      <input type="text" name="first_name" placeholder="First Name" />
      <input type="text" name="last_name" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="your message here..."
      ></textarea>
      <input
        type="number"
        name="donation_amount"
        placeholder="Donation Amount"
      />
      <select name="currency" id="currency">
        <option value="cad">CAD</option>
        <option value="usd">USD</option>
      </select>

      <button type="submit">Donate</button>
    </form>
  </section>
</template>

