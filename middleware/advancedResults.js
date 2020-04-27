const advancedResults = (model, populate) => async (req, res, next) => {
  let query;
  // copy request.query
  const reqQuery = { ...req.query };

  //Fields to exclude
  const removeFields = ['select', 'sort'];
  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  //  console.log(reqQuery);

  // create query string
  let queryStr = JSON.stringify(reqQuery);

  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  // Finding resourse
  query = model.find(JSON.parse(queryStr));

  //Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  if (populate) {
    query = query.populate(populate);
  }
  // Execute the query
  const results = await query;

  res.advancedResults = {
    success: true,
    count: results.length,
    data: results,
  };
  next();
};
module.exports = advancedResults;
