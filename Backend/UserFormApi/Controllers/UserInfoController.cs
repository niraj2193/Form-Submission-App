using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserFormApi.Common_Data;
using UserFormApi.Model;
using Microsoft.Extensions.Logging; 

namespace UserFormApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<UserInfoController> _logger;

        public UserInfoController(ApplicationDbContext context, ILogger<UserInfoController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // POST api/UserInfo/- Add users
        [HttpPost]
        [Route("createUser")] 
        public async Task<IActionResult> CreateUser([FromBody] UserInfo user)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid user data provided: {UserData}", user);
                return BadRequest(ModelState);
            }

            try
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                _logger.LogInformation("User created successfully: {UserId}", user.Id);
                return Ok(user); 
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "Database update failed while adding user: {UserId}", user.Id);
                return StatusCode(500, "Internal server error while saving to database.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An unexpected error occurred while creating user: {UserId}", user.Id);
                return StatusCode(500, "An unexpected error occurred.");
            }
        }

        // GET api/UserInfo/ - Retrieve all users
        [HttpGet]
        [Route("getAllUsers")]
        public async Task<ActionResult<IEnumerable<UserInfo>>> GetUsers()
        {
            try
            {
                var users = await _context.Users.ToListAsync();
                if (users == null || !users.Any())
                {
                    _logger.LogWarning("No users found in the database.");
                    return NotFound("No users found."); // If no users found
                }

                return Ok(users); // Return users list
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "Database error while fetching users.");
                return StatusCode(500, "Internal server error while retrieving data from database.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An unexpected error occurred while retrieving users.");
                return StatusCode(500, "An unexpected error occurred.");
            }
        }

        // GET api/UserInfo/{id} - Retrieve user by ID
        [HttpGet("{id}")] 
        public async Task<ActionResult<UserInfo>> GetUserById(int id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id);

                if (user == null)
                {
                    _logger.LogWarning("User not found: {UserId}", id);
                    return NotFound($"User with ID {id} not found.");
                }

                return Ok(user); // Return the found user
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while retrieving the user with ID {UserId}", id);
                return StatusCode(500, "An unexpected error occurred.");
            }
        }
    }
}
