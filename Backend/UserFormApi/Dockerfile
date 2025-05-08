#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

# Use the official .NET 9 SDK image to build the app
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Use the .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["Backend/UserFormApi/UserFormApi.csproj", "UserFormApi/"]
RUN dotnet restore "UserFormApi/UserFormApi.csproj"

# Copy the rest of the application and publish it
COPY . .
WORKDIR "/src/UserFormApi"
RUN dotnet publish "UserFormApi.csproj" -c Release -o /app/publish

# Copy the published app from the build container to the base container
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "UserFormApi.dll"]